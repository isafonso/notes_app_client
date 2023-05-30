import { redirect } from "next/navigation";

const Page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await fetch(`${process.env.NEXT_API_DOMAIN}/criar-anotacao/`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    redirect("/");
  };

  return (
    <section className="w-full h-screen">
      <div className="flex flex-1 justify-around items-center h-[80px]">
        <button className="rounded-md px-4 py-2 bg-black text-white">
          Dark / Light Mode
        </button>
        <div className="text-center">
          <h1 style={{ fontSize: 30 }} className="font-bold">
            Crie suas anotações
          </h1>
        </div>
        <div className="text-center">
          <a href="/" className="rounded-md bg-blue-500 text-white px-4 py-2">
            Voltar
          </a>
        </div>
      </div>
      <div className="w-full">
        <form
          action={handleSubmit}
          className="flex flex-col justify-between w-[50%] m-auto"
        >
          <div className="flex flex-col mt-5">
            <label
              style={{ fontSize: 24 }}
              htmlFor="title"
              className="text-base mb-3"
            >
              Título da anotação
            </label>
            <input
              placeholder="Dê um título a sua anotação"
              type="text"
              className="w-[100%] p-3 border-solid border-slate-300 rounded-md border"
              name="title"
              id="title"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label
              style={{ fontSize: 24 }}
              htmlFor="content"
              className="text-base mb-3"
            >
              Conteúdo da anotação
            </label>
            <textarea
              className="w-[100%] p-3 border-solid border-slate-300 rounded-md border"
              name="content"
              id="content"
              rows={3}
              placeholder="Do que trata-se a sua anotação?"
            ></textarea>
          </div>
          <div className="flex">
            <button
              className="rounded-sm text-white bg-blue-500 px-4 py-2 mt-5"
              type="submit"
            >
              Criar Anotação
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
