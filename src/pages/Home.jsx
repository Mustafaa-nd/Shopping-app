import ArticleCard from '../components/ArticleCard'

const data = [
    {
        id: 1,
        title: "Framework vs Library",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum.",
        created_at: "2025_01_02"

    },

    {
        id: 2,
        title: "Programming Languages",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum.",
        created_at: "2025_01_02"

    },

    {
        id: 3,
        title: "Cybersecurity",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nobis, omnis maxime vero temporibus, ducimus deleniti dicta provident dolor molestiae velit adipisci non eaque doloribus iusto quisquam accusamus consequuntur laborum.",
        created_at: "2025_01_02"

    }
]
export default function Home() {
  return (
    <>
        {
            data.map((article) => (
                <ArticleCard article={article} key={article.id}/>
            ))
        }
    </>
  )
}

