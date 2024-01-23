interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return (
    <main>
      <p>Portfolio Layout</p>
      {children}
    </main>
  );
};

export default PortfolioLayout;
