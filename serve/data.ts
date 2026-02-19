const token = process.env.NEXT_PUBLIC_GIT_TOKEN;
const url = "https://api.github.com/user/repos?per_page=9&sort=updated";

export const getData = async () => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch url");
  }

  const data = await res.json();
  const result = data.filter((repo: any) => {
    if (repo.description !== null) {
      return repo;
    }
  });

  return result;
};
