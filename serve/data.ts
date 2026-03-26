const token = process.env.GIT_TOKEN;
const url = "https://api.github.com/user/repos?per_page=9&sort=updated";

type Repo = {
  description: string | null;
};

export const getData = async (): Promise<Repo[]> => {
  if (!token) {
    throw new Error("Missing GIT_TOKEN");
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub API error: ${error}`);
  }

  const data: Repo[] = await res.json();

  return data.filter((repo) => repo.description);
};
