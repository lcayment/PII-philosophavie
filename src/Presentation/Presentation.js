import React, { useState, useEffect } from "react";
import "./Presentation.css";

// firestore
import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes et img
import { FaPencilAlt } from "react-icons/fa";
import photo from "../img/gabrielle.jpeg";

// components
import Collapsible from "react-collapsible";
import ImageUploading from "react-images-uploading";

export default function Presentation() {
  const [newPresQuiContent, setNewPresQuiContent] = useState("Qui Content");
  const [newPresParcoursContent, setNewPresParcoursContent] =
    useState("Parcours Content");
  const [newPresVisionContent, setNewPresVisionContent] =
    useState("Vision Content");
  const [presentation, setPresentation] = useState([]);
  const presentationCollectionRef = collection(db, "presentation");

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const updatePresentationQui = async (id, qui) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { qui: newPresQuiContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };

  const updatePresentationParcours = async (id, parcours) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { parcours: newPresParcoursContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };

  const updatePresentationVision = async (id, vision) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { vision: newPresVisionContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };
  // render each time the page is called
  useEffect(() => {
    const getPresentation = async () => {
      const data = await getDocs(presentationCollectionRef);
      setPresentation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPresentation();
  }, [presentationCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Presentation">
      <div className="presentation-content">
        {presentation.map((pres) => {
          return (
            <div>
              <h1>Qui suis-je ?</h1>
              <p> {pres.qui}</p>
              <div className="photo-pres">
                <img src={photo} className="photo" alt="photo Gabrielle" />
              </div>
              {user ? (
                <Collapsible
                  trigger="Modifier la partie Qui suis-je ?"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu du qui suis-je"
                        onChange={(event) => {
                          setNewPresQuiContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationQui(pres.id, pres.qui);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                    <div>
                      <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          <div className="upload__image-wrapper">
                            <button
                              style={isDragging ? { color: "red" } : null}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              Click or Drop here
                            </button>
                            {imageList.map((image, index) => (
                              <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                  <button onClick={() => onImageUpdate(index)}>
                                    Update
                                  </button>
                                  <button onClick={() => onImageRemove(index)}>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                  </div>
                </Collapsible>
              ) : (
                ""
              )}
              <h1>Mon parcours</h1> <p>{pres.parcours}</p>
              {user ? (
                <Collapsible
                  trigger="Modifier la partie Mon Parcours"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu du parcours"
                        onChange={(event) => {
                          setNewPresParcoursContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationParcours(pres.id, pres.parcours);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                  </div>
                </Collapsible>
              ) : (
                ""
              )}
              <h1>Ma vision</h1> <p>{pres.vision}</p>
              {user ? (
                <Collapsible
                  trigger="Modifier la partie Ma vision"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu de la vision"
                        onChange={(event) => {
                          setNewPresVisionContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationVision(pres.id, pres.vision);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                  </div>
                </Collapsible>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
