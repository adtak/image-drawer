import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { type Album, getFirstAlbum } from "../models/Album";
import { fetcher } from "../utils/fetcher";

const useAlbums = () => {
  const [activeAlbumId, setActiveAlbumId] = useState<number | undefined>(
    undefined,
  );
  const [searchParams, _] = useSearchParams();
  const userId = searchParams.get("userId") ?? "1";
  const url = `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`;
  const { data, isLoading } = useSWRImmutable<Album[]>(url, fetcher, {
    revalidateOnMount: true,
    onSuccess: (data) => {
      setActiveAlbumId(getFirstAlbum(data).id);
    },
  });
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveAlbumId(newValue);
  };

  return {
    albums: data,
    isAlbumsLoading: isLoading,
    activeAlbumId,
    handleChange,
  };
};

export { useAlbums };
