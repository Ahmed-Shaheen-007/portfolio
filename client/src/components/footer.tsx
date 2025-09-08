export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground" data-testid="footer-copyright">
          © {currentYear} <span className="font-semibold">Ahmed</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
