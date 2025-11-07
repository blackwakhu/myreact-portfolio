import type React from "react";

type NavigationFunction = (pageName: string) => void;

interface HomePageProps {
  onNavigate: NavigationFunction;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="bg-slate-800 text-white min-h-screen">
        <div>
          <div onClick={() => onNavigate("shoppingList")} className="border p-4 rounded-2xl hover:bg-gray-400">
            <h2>Shopping List</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
