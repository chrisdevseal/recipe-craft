import Counter from "@/components/counter"
import data from "@/lib/data"

export default async function RecipeID({ params }: {
    params: Promise<{id: string}>
}) {
    const id = await (await params).id
    
    const recipes = data;

    const selectedRecipe = recipes.find(element => element.id === parseInt(id))

    return (
        <div className="recipe">
           {selectedRecipe?.name}<br/>{selectedRecipe?.description}
        </div>
    )
}