// src/stores/teamStore.js
let cachedTeams = null;

export async function getTeams(BASE_URL, teamAId, teamBId) {
  if (cachedTeams) return cachedTeams; // devuelve cache si existe

  const resA = await fetch(`${BASE_URL}/api/teams/${teamAId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching team A: ${res.statusText}`);
      }
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  const { data: teamA } = await resA.json();

  const resB = await fetch(`${BASE_URL}/api/teams/${teamBId}`);
  const { data: teamB } = await resB.json();

  cachedTeams = [teamA, teamB]; // guardo en memoria
  return cachedTeams;
}
