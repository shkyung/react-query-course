import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import {useState} from "react";

export default function Issues() {
    const [labels, setLabels] = useState([])
    const toggle = (label) => {
        if (labels.includes(label)) {
            const newLabels = labels.filter((currentLabel) => currentLabel !== label)
           setLabels(newLabels)
        } else {
            const newLabels = labels.concat(label)
            setLabels(newLabels)
        }
    }
    return (
        <div>
            <main>
                <section>
                    <h1>Issues</h1>
                    <IssuesList labels={labels}/>
                </section>
                <aside>
                    <LabelList selected={labels}
                               toggle={(label) => toggle(label)}/>
                </aside>
            </main>
        </div>
    );
}
