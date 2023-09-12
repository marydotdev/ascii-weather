let location = {
  'latitude': '0',
  'longitude': '0'
}

export const load = () => {
  return {
    location
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
      const data = await request.formData();
      const latitude = data.get('latitude');
      const longitude = data.get('longitude');
      //console.log(latitude, longitude)
      location = {
        'latitude': latitude,
        'longitude': longitude
      }
      return {
        success: true,
      }
  }
};

