interface ExperimentLayoutProps {
  children: React.ReactNode;
}

const ExprimentLayout = ({ children }: ExperimentLayoutProps) => {
  return <main className="h-full">{children}</main>;
};

export default ExprimentLayout;
