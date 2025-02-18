interface OnboardingLayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function OnboardingLayout({ children, fullWidth = false }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className={`relative w-full ${fullWidth ? 'max-w-[2000px]' : 'max-w-[600px]'} p-8 mx-auto`}>
        {children}
      </div>
    </div>
  );
} 