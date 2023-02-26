import httpService from "./http.service";

const partEndpoint = "parts/";

const partService = {
    get: async () => {
        const { data } = await httpService.get(partEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(partEndpoint, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            partEndpoint + payload._id,
            payload
        );
        return data;
    },
    remove: async (partId) => {
        const { data } = await httpService.delete(partEndpoint + partId);
        return data;
    }
};

export default partService;
