import { use } from "react";
import { NavLink } from "react-router";

const CategoryMenuItems = ({ fetchCategories }) => {
    const categories = use(fetchCategories)
    return (
        <div className="flex flex-col gap-4">
            {categories.map((category) => <NavLink key={category.id} to={`/news/${category.id}`} className={({ isActive }) => isActive ? "text-center font-semibold text-xl dark2 dark6 py-4 rounded-md" : "text-center font-medium text-xl dark4"}>{category.name}</NavLink>)}
        </div>
    );
};

export default CategoryMenuItems;