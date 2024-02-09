import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import GET_CATEGORY_BY_ID from "../gql/category/getCategoryByID";
import { useParams } from "react-router-dom";

import UPLOAD_IMAGES from "../gql/upload/uploadImages";
import UPDATE_CATEGORY from "../gql/category/updateCategory";

const useUpdateCategory = () => {
  // parameters
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState([]);
  const [ids, setIds] = useState([]);
  const [note, setNote] = useState("");
  const [warning, setWarning] = useState("");
  const [upload, { data }] = useMutation(UPLOAD_IMAGES);
  const [updateCategory] = useMutation(UPDATE_CATEGORY);
  const urlx = "http://localhost:1337";
  const [title, setTitle] = useState();
  const { id } = useParams();
  const idx = id.substring(1);

  const { data: category } = useQuery(GET_CATEGORY_BY_ID, {
    variables: { id: idx },
  });

  // get title from data
  useEffect(() => {
    let allImages = [];

    if (category) {
      console.log("category", category.category.data.attributes.image.data);
      allImages = category.category.data.attributes.image.data;
      setTitle(category.category.data.attributes.title);
      setUrl(allImages);
    }
  }, [category]);

  useEffect(() => {
    if (url) {
      const dd = url.map((x) => x.id);
      setIds(dd);
      console.log("url", url);
      console.log("dd", dd);
    }
  }, [url]);
  const displayImages = (e) => {
    setWarning("");
    if (e.target.files.length > 3) {
      setWarning("Images should be less than 4");
      return;
    }

    const allFiles = e.target.files;
    const images = [];

    for (let image of allFiles) {
      images.push(image);
    }

    setFiles(images);
  };

  const deleteUrl = (URL) => {
    const select = url.filter((file) => file !== URL);
    setUrl(select);
  };
  const update = async (title) => {
    await updateCategory({
      variables: { id: idx, image: ids, title: title },
      onCompleted: () => {
        setNote("category has been updated");
      },
      onError: () => {
        setWarning("ERROR :category has not been updated");
      },
    });
  };

  // function to upload Images
  const UploadImages = async () => {
    if (files.length > 0) {
      if (files.length < 4 && files.length + ids.length < 4) {
        setWarning("");
        await upload({
          variables: {
            refId: idx,
            ref: "api::category.category",
            field: "image",
            files,
          },
          onCompleted: () => {
            setNote("Images have been uploaded");
          },
        });
      } else {
        setWarning("Number of images  must be less than 4");
      }
    } else {
      setWarning("No  images are selected");
    }
  };
  useEffect(() => {
    if (data) {
      const idd = data.multipleUpload.map((file) => file.data.id);
      if (idd.length < 4 && idd.length + ids.length < 4) {
        setIds([...ids, ...idd]);
      } else {
        setWarning("Number of images  must be less than 4");
      }
    }
  }, [data]);

  // function to delete images
  const DeleteImages = (select) => {
    setWarning("");
    setNote("");
    const selected = files.filter((file) => file !== select);

    setFiles(selected);
  };

  return {
    title,
    setTitle,
    displayImages,
    files,
    note,
    warning,
    DeleteImages,
    deleteUrl,
    url,
    urlx,
    UploadImages,
    update,
  };
};

export default useUpdateCategory;
