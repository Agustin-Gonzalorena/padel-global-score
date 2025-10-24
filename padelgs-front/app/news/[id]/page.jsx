import { news } from "../newsData";

export default function NewsPage({ params }) {
  const id = parseInt(params.id);
  const item = news.find((n) => n.id === id);

  if (!item) return <div>Noticia no encontrada</div>;

  return (
    <div className="mt-5 mb-20 px-2">
      <div className="w-full flex justify-between items-center mb-2">
        <a href="/news" className="text-muted-foreground text-sm underline">
          Noticias
        </a>
        <p className="text-muted-foreground text-sm">{item.date}</p>
      </div>
      <h1 className="text-2xl font-extrabold my-0.5">{item.title}</h1>
      <h3>{item.subtitle}</h3>
      <div className="w-full h-45 overflow-hidden">
        <img className="" src={item.image} alt="" />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {item.paragraphs.map((p, index) => (
          <p key={index} className="text-justify">
            {p}
          </p>
        ))}
      </div>
      <p className="w-full text-right mt-4 px-5 font-light">GEPETE</p>
    </div>
  );
}

// Esto genera automáticamente las páginas /news/1, /news/2, etc.
export async function generateStaticParams() {
  return news.map((n) => ({ id: n.id.toString() }));
}
