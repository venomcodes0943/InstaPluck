import useInstaReel from "./hooks/useInstaReel"
import PropTypes from 'prop-types'

function InstaReelViewer({ requestUrl }) {
    const { content, loading, error } = useInstaReel(requestUrl);

    if (loading) {
        return (
            <div className="absolute top-[50%] left-[50%]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (error) {
        return (
            <div role="alert" className="alert alert-error w-full md:w-96 mx-auto mt-3 px-2 py-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error.includes("429") ? 'To many requests limit exceed' : error || error.includes("400") ? 'Not Found' : error}</span>
            </div>
        )
    }
    if (!(content === '')) {
        return (
            <video className="w-full h-52 md:w-96 mx-auto mt-5 rounded-md shadow-md " src={content} controls />
        );
    }
}


InstaReelViewer.propTypes = {
    requestUrl: PropTypes.string,
}
export default InstaReelViewer;