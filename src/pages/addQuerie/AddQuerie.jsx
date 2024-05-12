
const AddQuerie = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-[520px] w-full p-6 rounded-md  border">
        <div className="mb-8 text-center">
          <h1 className="text-[30px]  font-Inter font-bold">Add Query</h1>
        </div>
        <form className="space-y-12 font-Inter ">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="brand"
                  placeholder="Product Brand"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="image-url"
                  placeholder="Product Image-URL"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Query TItle"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
            </div>
            <div>
              <textarea
                type="text"
                name="boycotting"
                placeholder="Boycotting Reason Details"
                className="w-full h-[200px] overflow-auto px-3 py-2 border rounded-md resize-none"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button className="w-full button font-Inter font-semibold">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuerie;
