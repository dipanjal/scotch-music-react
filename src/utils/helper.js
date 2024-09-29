const getStaticFileUri = (file) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const staticFileUri = baseUrl.endsWith('/') ? `${baseUrl}${file}` : `${baseUrl}/${file}`;
    return staticFileUri;
}

export { getStaticFileUri };
