import { useEffect, useState } from "react";

function useInstaReel(requestUrl) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!requestUrl) return;
        let isMounted = true;

        let apiUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/post_info?code_or_id_or_url=${requestUrl}`;
        const options = {
            method: "GET",
            headers: {
                'x-rapidapi-key': 'c4b0cf823amshd3cc5ebb1000760p13c200jsnc78e6a637f64',
                'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        }

        setLoading(true);
        setError(null);

        fetch(apiUrl, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(res => {
                console.log(res.data.video_url);
                if (isMounted) {
                    if (res.data.video_url) {
                        setContent(res.data.video_url); // Update to access the url from the array
                    } else {
                        throw new Error("Unexpected response structure");
                    }
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            });
        return () => {
            isMounted = false;
        };
    }, [requestUrl])

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return { content, loading, error };
}

export default useInstaReel;