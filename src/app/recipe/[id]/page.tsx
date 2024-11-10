import Counter from "@/components/counter"

export default async function RecipeID({ params }: {
    params: Promise<{id: string}>
}) {
    const id = await (await params).id
    return (
        <div className="recipe">
            ID: {id}
            <br />
            <Counter />
        </div>
    )
}