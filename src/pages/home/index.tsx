import { useQuery } from "@tanstack/react-query";
import { ImageList } from "../../components/image-list";
import { ImageModel } from "../../models/images";
import { useState } from "react";
import { Input } from "../../components/input";

const fetchImages = async (): Promise<ImageModel[]> => {
  const response = await fetch("https://picsum.photos/v2/list");
  return response.json();
};

export const HomePage = () => {
  const { data, isLoading, error } = useQuery<ImageModel[]>({
    queryKey: ["images"],
    queryFn: fetchImages
  });

  const [search, setSearch] = useState<string | undefined>(undefined);

  const filteredImages = data
    ? data.filter((image) =>
        search
          ? image.author.toLowerCase().includes(search.toLowerCase())
          : true
      )
    : [];

  if (error) {
    return <div>Erro ao buscar imagens</div>;
  }
  return (
    <main className="container mx-auto">
      <h1 className="pb-6 pt-10 text-2xl font-bold tracking-tight">Início</h1>
      <div className="flex w-96 flex-col pb-4">
        <label htmlFor="author" className="font-medium">
          Pesquisa por autor
        </label>
        <Input
          type="text"
          id="author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        data && <ImageList images={filteredImages} />
      )}
    </main>
  );
};
