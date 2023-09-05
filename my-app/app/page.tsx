import  Data  from "./component/Data";

export const getData = async () => {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }else{
  return res.json();
  }
};

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <Data userData={data} />
    </main>
  );
}
