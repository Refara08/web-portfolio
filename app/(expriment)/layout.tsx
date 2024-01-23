interface ExperimentLayoutProps {
  children: React.ReactNode;
}

const ExprimentLayout = ({ children }: ExperimentLayoutProps) => {
  return (
    <main>
      <p>header</p>
      {children}
      <p>footer</p>
    </main>
  );
};

export default ExprimentLayout;
