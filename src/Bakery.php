<?php

namespace App;

class Bakery
{
    /**
     * Calculate the output of cakes for a giver recipe
     *
     * @param array $recipe      Contains the necessary ingredients to make one cake
     * @param array $ingredients Contains the amount of ingredients you have available to bake
     *
     * @return int The number of cakes you can bake
     */
    public static function calculateOutput(array $recipe, array $ingredients): int
    {
        $numberOfCakes = 0;

        if (!self::hasNecessaryIngredients(array_keys($recipe), array_keys($ingredients))) {

            return $numberOfCakes;

        }

        $results = [];

        foreach ($recipe as $key=>$value) {

            if (array_key_exists($key, $ingredients)) {

                $diff = intval($ingredients[$key] / $value);

                array_push($results, $diff);

                if($diff === 0) break 1;

            }   
        }

        $numberOfCakes = min($results);

        return $numberOfCakes;
    }

    /**
     * Checks if all ingredients required by a recipe are available in a given set of ingredients.
     *
     * @param array $recipe      An associative array where keys represent the required ingredient names.
     * @param array $ingredients An associative array representing the available ingredients.
     *
     * @return bool Returns `true` if all required ingredients are present; otherwise, returns `false`.
     */
    public static function hasNecessaryIngredients(array $recipe, array $ingredients): bool {

        $result = true;

        foreach (array_keys($recipe) as $key) {

            if (!array_key_exists($key, $ingredients)) {

                $result = false;

                break;

            } 
        }

        return $result;

    }

}