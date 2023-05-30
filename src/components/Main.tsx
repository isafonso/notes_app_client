import Link from "next/link";
import { redirect } from "next/navigation";

interface IDataProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const Main = async () => {
  const res = await fetch(`${process.env.NEXT_API_DOMAIN}`, {
    method: "GET",
    cache: "no-store",
  });

  const data: IDataProps[] = await res.json();

  const handleDelete = async (formData: FormData) => {
    "use server";
    const id = formData.get("delete");
    await fetch(`${process.env.NEXT_API_DOMAIN}/deletar-anotacao/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect("/");
  };

  return (
    <main className="flex flex-col lg:justify-center lg:items-center">
      <h1
        style={{ fontSize: "34px", marginBottom: -5 }}
        className="text-black mt-10 font-semibold"
      >
        Gerencie suas anotações
      </h1>
      {data ? (
        <table className="border-spacing-5 mt-10 w-[50%] h-auto">
          <thead className="bg-black text-white w-[100%] h-[50px] px-3 py-3">
            <tr className="text-center">
              <th>ID</th>
              <th>Título</th>
              <th>Conteúdo</th>
              <th>Gerir</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dt) => (
              <tr className="text-center font-semibold" key={dt.id}>
                <td className="p-5">{dt.id}</td>
                <td className="p-5">{dt.title}</td>
                <td className="p-5">{dt.content}</td>
                <td className="p-5 flex">
                  <Link
                    href={`/editar/${dt.id}`}
                    className="mt-5 mr-5 px-2 py-2 bg-green-500 rounded-sm hover:bg-green-800 text-white"
                  >
                    Editar
                  </Link>
                  <form action={handleDelete}>
                    <input value={dt.id} type={"hidden"} name="delete" />
                    <input
                      type={"submit"}
                      value="Deletar"
                      className="cursor-pointer mt-5 px-2 py-2 bg-red-500 rounded-sm hover:bg-red-800 text-white"
                    />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="font-bold tex-black">
          Ainda não há anotações cadastradas no seu App
        </span>
      )}
    </main>
  );
};

export default Main;
