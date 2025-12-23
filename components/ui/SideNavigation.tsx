interface Section {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function SideNavigation({
  sections,
  activeSection,
  onSectionClick,
}: SideNavigationProps) {
  return (
    <aside className="hidden lg:block lg:w-64 shrink-0">
      <div className="sticky top-20">
        <nav className="card-bg p-4 rounded-lg">
          <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-3 px-2">
            목차
          </h3>
          <ul className="space-y-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onSectionClick(id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === id
                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
