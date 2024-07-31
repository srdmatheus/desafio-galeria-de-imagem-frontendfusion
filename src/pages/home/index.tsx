import { useQuery } from "@tanstack/react-query";
import { ImageList } from "../../components/image-list";
import { ImageModel } from "../../models/images";

const fetchImages = async (): Promise<ImageModel[]> => {
  const response = await fetch("https://picsum.photos/v2/list");
  return response.json();
};

export const HomePage = () => {
  const { data, isLoading, error } = useQuery<ImageModel[]>({
    queryKey: ["images"],
    queryFn: fetchImages
  });

  if (error) {
    return <div>Erro ao buscar imagens</div>;
  }
  return (
    <main className="container mx-auto">
      <h1 className="pb-6 pt-10 text-2xl font-bold tracking-tight">Início</h1>
      {isLoading ? <p>Carregando...</p> : data && <ImageList images={data} />}
    </main>
  );
};
