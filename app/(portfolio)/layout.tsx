import { ThemeToggler } from "@/components/theme-toggler";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return (
    <main className="h-full relative">
      {children}
      <ThemeToggler className="absolute bottom-5 right-5" />
    </main>
  );
};

export default PortfolioLayout;
