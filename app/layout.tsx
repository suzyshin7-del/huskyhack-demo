import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Husky Hack | George Brown College',
  description: 'Husky Hack landing page for George Brown College built with Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    "primary-fixed": "#d5e3ff",
                    "surface-bright": "#fbf8fe",
                    "on-secondary-fixed": "#251a00",
                    "on-surface-variant": "#43474f",
                    "tertiary-fixed": "#d3e4ff",
                    "error": "#ba1a1a",
                    "surface-dim": "#dcd9de",
                    "outline": "#737780",
                    "inverse-surface": "#303034",
                    "inverse-on-surface": "#f3f0f5",
                    "surface-container": "#f0edf2",
                    "tertiary-fixed-dim": "#a2c9ff",
                    "on-error-container": "#93000a",
                    "on-primary-fixed": "#001b3c",
                    "on-primary-container": "#799dd6",
                    "on-primary": "#ffffff",
                    "secondary": "#785a00",
                    "primary-container": "#003366",
                    "surface-container-highest": "#e4e1e7",
                    "primary": "#001e40",
                    "on-secondary": "#ffffff",
                    "on-tertiary-container": "#659ee4",
                    "inverse-primary": "#a7c8ff",
                    "on-surface": "#1b1b1f",
                    "surface-container-low": "#f6f2f8",
                    "background": "#fbf8fe",
                    "tertiary-container": "#00345f",
                    "error-container": "#ffdad6",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "surface-tint": "#3a5f94",
                    "on-primary-fixed-variant": "#1f477b",
                    "secondary-container": "#fec324",
                    "surface-variant": "#e4e1e7",
                    "surface": "#fbf8fe",
                    "primary-fixed-dim": "#a7c8ff",
                    "on-secondary-fixed-variant": "#5b4300",
                    "on-secondary-container": "#6e5200",
                    "on-error": "#ffffff",
                    "secondary-fixed-dim": "#f8be1c",
                    "secondary-fixed": "#ffdf9d",
                    "on-tertiary-fixed-variant": "#004881",
                    "on-background": "#1b1b1f",
                    "outline-variant": "#c3c6d1",
                    "surface-container-high": "#eae7ed",
                    "tertiary": "#001f3c"
                  },
                  borderRadius: {
                    DEFAULT: "0.125rem",
                    lg: "0.25rem",
                    xl: "0.5rem",
                    full: "0.75rem"
                  },
                  fontFamily: {
                    headline: ["Space Grotesk"],
                    body: ["Manrope"],
                    label: ["Manrope"]
                  }
                },
              },
            };
          `,
          }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface">{children}</body>
    </html>
  );
}
