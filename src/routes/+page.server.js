/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const location = data.get('location');

        console.log(location)
    }
};
