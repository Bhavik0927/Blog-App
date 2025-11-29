import "../CSS/Categories.css";
import {CategorieTypes} from '../Components/Constant';



const Categories = ({ categories, setCategories, prevStep, submit }) => {


  const toggleCategory = (data) => {
    if (categories.includes(data)) {
      setCategories(categories.filter((c) => c != data));
    } else {
      setCategories([...categories, data]);
    }
  };


  return (
    <div className="Main_container">
      <form>
        <h1 style={{ fontFamily: "var(--primary-font)" }}>
          Select Your Intrest
        </h1>
        <div className="Category_container">
          {CategorieTypes.map((data, index) => (
            <div>
              <button
                key={data}
                type="button"
                onClick={() => toggleCategory(data)}
                style={{
                  backgroundColor: categories.includes(data)
                    ? "#44403B"
                    : "#fff",
                  color: categories.includes(data) ? "#fff" : "#000",
                }}
              >
                {data}
              </button>
            </div>
          ))}
        </div>

        <div className="step-buttons">
          <button className="finish-btn" onClick={submit}>
            Finish Signup
          </button>
          <button className="back-btn" onClick={prevStep}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Categories;
