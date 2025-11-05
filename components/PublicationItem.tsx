interface Publication {
  id: number
  year: number
  authors: string
  title: string
  venue: string
  pdf?: string | null
  code?: string | null
}

export default function PublicationItem({ paper }: { paper: Publication }) {
  return (
    <div className="border border-gray-300 rounded-lg p-3 bg-white hover:shadow-md transition-shadow duration-200">
      <p className="my-0.5 text-sm sm:text-base">
        <span className="font-semibold text-gray-700">Authors: </span>
        <span className="text-gray-600 break-words">{paper.authors}</span>
      </p>
      <p className="my-0.5 text-sm sm:text-base">
        <span className="font-semibold text-gray-700">Title: </span>
        <span className="text-gray-800 break-words">{paper.title}</span>
      </p>
      <p className="my-0.5 text-sm sm:text-base">
        <span className="font-semibold text-gray-700">Venue: </span>
        <span className="text-gray-600">{paper.venue}</span>
      </p>
    
      {(paper.pdf || paper.code) && (
        <div className="flex gap-3 sm:gap-4 mt-2">
          {paper.pdf && (
            <a 
              href={paper.pdf} 
              className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              [PDF]
            </a>
          )}
          {paper.code && (
            <a 
              href={paper.code} 
              className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Code]
            </a>
          )}
        </div>
      )}
    </div>
  )
}
