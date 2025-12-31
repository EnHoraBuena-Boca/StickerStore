export async function PackCards() {
  const url = "http://localhost:3000/api/v1/pack";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error, go fuck yourself", error);
  }
}

export async function UserCards(page: number, per_page: number) {
  const part1 = "http://localhost:3000/api/v1/user_cards?page=";
  const part2 = "&per_page=";
  const url = `${part1}${page}${part2}${per_page}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error, go fuck yourself", error);
  }
}
