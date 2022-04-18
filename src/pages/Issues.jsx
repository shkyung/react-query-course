import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import {useState} from "react";
import {StatusSelect} from "../components/StatusSelect";

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
    const [status, setStatus] = useState("")
    return (
        <div>
            <main>
                <section>
                    <h1>Issues</h1>
                    <IssuesList labels={labels} status={status}/>
                </section>
                <aside>
                    <LabelList selected={labels}
                               toggle={(label) => toggle(label)}/>
                    <h3>Status</h3>
                    <StatusSelect value={status} onChange={(e) => setStatus(e.target.value)}/>
                </aside>
            </main>
        </div>
    );
}

