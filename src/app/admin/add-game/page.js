"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Upload,
  PlusCircle,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Images,
  Youtube,
  X,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

function AddGameForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("editId");
  const isEditing = !!editId;

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(isEditing);
  const [message, setMessage] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    category: "Outdoor",
    description: "",
  });

  const [preview, setPreview] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    if (isEditing) {
      fetch(`/api/games/${editId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const game = data.data;
            setFormValues({
              name: game.title,
              category: game.category,
              description: game.description,
            });
            setPreview(game.image);
            setVideoPreview(game.video);

            if (game.gallery) {
              setGalleryData(game.gallery.map((url) => ({ file: null, url })));
            }
          }
          setFetchLoading(false);
        });
    }
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);

    formData.delete("gallery");
    galleryData.forEach((item) => {
      if (item.file) {
        formData.append("gallery", item.file);
      } else if (item.url) {
        formData.append("existingGallery", item.url);
      }
    });

    if (isEditing && !videoPreview) {
      formData.append("removeVideo", "true");
    }

    try {
      const url = isEditing ? `/api/games/${editId}` : "/api/games";
      const method = isEditing ? "PATCH" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();

      if (data.success) {
        setMessage(
          isEditing
            ? "GAME UPDATED SUCCESSFULLY! ✅"
            : "GAME LIVE HOGYA HAI! ✅",
        );
        if (!isEditing) {
          e.target.reset();
          setPreview(null);
          setGalleryData([]);
          setVideoPreview(null);
          setFormValues({ name: "", category: "Outdoor", description: "" });
        } else {
          setTimeout(() => router.push("/admin/manage-games"), 1500);
        }
      } else {
        setMessage("Error: " + data.message);
      }
    } catch (err) {
      setMessage("Connection issue! Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
    }));
    setGalleryData((prev) => [...prev, ...newItems]);
    e.target.value = "";
  };

  const removeGalleryImage = (indexToRemove) => {
    setGalleryData((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-orange-500">
        <RefreshCw className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10">
        <div className="xl:col-span-4 space-y-6">
          <Link
            href={isEditing ? "/admin/manage-games" : "/"}
            className="text-gray-500 hover:text-orange-500 flex items-center gap-2 text-sm font-bold transition"
          >
            <ChevronLeft size={16} /> BACK
          </Link>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-white sticky top-12">
            <Sparkles className="text-orange-500 mb-4" size={32} />
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              {isEditing ? "UPDATE" : "ADD NEW"} <br />{" "}
              <span className="text-orange-500">LEGACY</span>
            </h1>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed italic">
              {isEditing
                ? "Changes seedha database mein reflect honge."
                : "Indore ki galliyon se seedha club ke dashboard tak."}
            </p>
          </div>
        </div>

        <div className="xl:col-span-8 bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 text-black">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                    Game Title
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-5 py-3.5 rounded-2xl bg-gray-100 focus:border-orange-500 border-2 border-transparent font-bold outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                    Category
                  </label>
                  <div className="flex gap-2 mt-1">
                    {["Outdoor", "Indoor", "Traditional"].map((cat) => (
                      <label key={cat} className="flex-1">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={formValues.category === cat}
                          onChange={handleChange}
                          className="hidden peer"
                        />
                        <div className="text-center py-3 rounded-xl bg-gray-100 text-gray-500 font-bold text-[11px] cursor-pointer peer-checked:bg-orange-500 peer-checked:text-white transition-all uppercase">
                          {cat}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-5 py-3.5 rounded-2xl bg-gray-100 focus:border-orange-500 border-2 border-transparent font-semibold outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group h-35">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 mb-1 block">
                    Main Cover Photo
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required={!isEditing}
                    onChange={(e) => {
                      if (e.target.files[0])
                        setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer mt-6"
                  />
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl h-full flex flex-col items-center justify-center text-center overflow-hidden">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Main Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <Upload className="text-gray-300 mb-2" size={24} />
                        <p className="text-[10px] font-black text-gray-400 uppercase">
                          Upload cover
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 flex items-center gap-1 mb-1">
                    <Youtube size={12} /> Gameplay Video
                  </label>
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={(e) => {
                      if (e.target.files[0])
                        setVideoPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-100 font-bold outline-none text-sm"
                  />
                  {videoPreview && (
                    <div className="mt-2 relative rounded-xl overflow-hidden border border-gray-200">
                      <video
                        src={videoPreview}
                        controls
                        className="w-full h-24 object-cover bg-black"
                      />
                      <button
                        type="button"
                        onClick={() => setVideoPreview(null)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 z-10"
                      >
                        <X size={12} strokeWidth={3} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 flex items-center gap-1">
                <Images size={12} /> Gallery (Multiple Photos)
              </label>

              <div className="relative w-full mt-2 px-6 py-4 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-300 hover:border-orange-500 transition-all text-center cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <span className="text-gray-500 font-bold text-sm">
                  Drop photos here or click to browse
                </span>
              </div>

              {galleryData.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-4">
                  {galleryData.map((item, idx) => (
                    <div key={idx} className="relative group aspect-square">
                      <img
                        src={item.url}
                        alt={`Preview ${idx}`}
                        className="h-full w-full object-cover rounded-xl border border-gray-200 shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                      >
                        <X size={12} strokeWidth={4} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              {message && (
                <div
                  className={`p-4 mb-4 rounded-2xl flex items-center gap-3 ${message.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
                >
                  <CheckCircle2 size={18} />
                  <p className="font-black text-[10px] uppercase tracking-wider">
                    {message}
                  </p>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-[3px] transition-all flex items-center justify-center gap-3 ${loading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-orange-600"}`}
              >
                {loading ? (
                  isEditing ? (
                    "UPDATING..."
                  ) : (
                    "UPLOADING..."
                  )
                ) : (
                  <>
                    <PlusCircle size={20} />{" "}
                    {isEditing ? "UPDATE GAME" : "PUBLISH GAME"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AddGame() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-orange-500">
          <RefreshCw className="animate-spin" size={40} />
        </div>
      }
    >
      <AddGameForm />
    </Suspense>
  );
}
