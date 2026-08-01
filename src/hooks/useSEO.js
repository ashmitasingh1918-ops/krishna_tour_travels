import { useEffect } from "react";

export function useSEO({ title, description, keywords }) {
  useEffect(() => {
    const baseTitle = "Krishna Tour India";
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | India Tour Packages & Private Tours`;

    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute("content", description);
    }
  }, [title, description, keywords]);
}

export default useSEO;
