export default function ServiceCard({ title, description }) {
    return (
        <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
             {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
             {description}
            </p>
        </div>
    )
}