var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const HOST = "https://pillars.attente.ca";
function getLeaders(limit, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = offset === undefined
            ? limit === undefined
                ? `${HOST}/leaders`
                : `${HOST}/leaders?limit=${limit}`
            : limit === undefined
                ? `${HOST}/leaders?offset=${offset}`
                : `${HOST}/leaders?offset=${offset}&limit=${limit}`;
        const response = yield fetch(request);
        return response.json();
    });
}
function getDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${HOST}/details?id=${id}`);
        const json = yield response.json();
        return json.details;
    });
}
function record(result) {
    return fetch(`${HOST}/record`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result)
    });
}
window.addEventListener("load", () => {
    document.getElementById("leadersButton").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const offsetValue = document.getElementById("leadersOffset").value;
        const limitValue = document.getElementById("leadersLimit").value;
        let offset;
        if (offsetValue !== "") {
            offset = parseInt(offsetValue, 0);
        }
        let limit;
        if (limitValue !== "") {
            limit = parseInt(limitValue, 0);
        }
        const leaders = yield getLeaders(limit, offset);
        document.getElementById("leadersResponse").value = JSON.stringify(leaders, undefined, 2);
    }));
    document.getElementById("detailsButton").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const idValue = document.getElementById("detailsId").value;
        if (idValue !== "") {
            const details = yield getDetails(+idValue);
            document.getElementById("detailsResponse").value = details;
        }
    }));
    document.getElementById("recordButton").addEventListener("click", () => {
        const scoreValue = document.getElementById("recordScore").value;
        const summaryValue = document.getElementById("recordSummary").value;
        const detailsValue = document.getElementById("recordDetails").value;
        record({
            score: +scoreValue,
            summary: summaryValue,
            details: detailsValue
        });
    });
});
