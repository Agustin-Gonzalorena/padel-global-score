import Link from "next/link";
import { news } from "./newsData";
import TitleSections from "../components/TitleSections";

export default function NewsList() {
  return (
    <div>
      <TitleSections
        title={"Noticias"}
        subtitle="Mantente al día con las últimas novedades"
      />
      <div className="flex flex-col gap-4 px-2">
        {news
          .sort((a, b) => b.id - a.id)
          .map((n) => (
            <div key={n.id}>
              <Link href={`/news/${n.id}`}>
                <p className="text-sm text-muted-foreground w-full text-right">
                  {n.date}
                </p>
                <div className="bg-white/30 rounded p-4 max-h-30 flex ">
                  <div className="w-1/2 overflow-hidden flex items-start justify-center">
                    <h2 className="">{n.title}</h2>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden ml-4">
                    <img className="rounded" src={n.image} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
