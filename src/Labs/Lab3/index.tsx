// Pauline Saveliev
// CS5610 - Summer 1 2025

import VariablesAndConstants from "./VariablesAndConstants"
import VariableTypes from "./VariableTypes"
import BooleanVariables from "./BooleanVariables"
import IfElse from "./IfElse"
import TernaryOperator from "./TernaryOperator"
import ConditionalOutputIfElse from "./ConditionalOutputIfElse"
import ConditionalOutputInLine from "./ConditionalOutputInline"
import LegacyFunctions from "./LegacyFunctions"
import ArrowFunctions from "./ArrowFunctions"
import ImpliedReturn from "./ImpliedReturn"
import TemplateLiterals from "./TemplateLiterals"
import SimpleArrays from "./SimpleArrays"
import ArrayIndexAndLength from "./ArrayIndexAndLength"
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays"
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunction"
import FindFunction from "./FindFunction"
import FindIndex from "./FindIndex"
import FilterFunction from "./FilterFunction"
import JsonStringify from "./JsonStringify"
import House from "./House"
import TodoList from "./todos/TodoList"
import Spreading from "./Spreading"
import Destructing from "./Destructing"
import FunctionDestructing from "./FunctionDestructing"
import DestructingImports from "./DestructingImports"
import Classes from "./Classes"
import Styles from "./Styles"
import Add from "./Add"
import Square from "./Square"
import Highlight from "./Highlight"
import PathParameters from "./PathParameters"

export default function Lab3() {
    return (
        <div>
            <h2>Lab 3</h2>
            <h3>Javascript</h3>
            <VariablesAndConstants /><br />
            <VariableTypes /> <br />
            <BooleanVariables /> <br />
            <IfElse /> <br />
            <TernaryOperator /> <br />
            <ConditionalOutputIfElse /> <br />
            <ConditionalOutputInLine /> <br />
            <LegacyFunctions /> <br />
            <ArrowFunctions /> <br />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <h3>Parameterizing</h3>
            <Add a={3} b={4} />
            <h3>Child Components</h3>
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <PathParameters />
        </div>
    )
}