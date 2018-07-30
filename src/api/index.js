

export const getPhoto = () => {
  const apiUrl = `https://api.unsplash.com/photos/?client_id=3df1abc63935360442da7560b347660a10b623c37d591f91e8b6d59efca2a228`;
  return fetch(apiUrl)
        .then(res => res.json())
}