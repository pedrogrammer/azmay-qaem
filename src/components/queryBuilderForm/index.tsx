import { format, parse } from "date-fns";
import { useState } from "react";
import QueryBuilder, {
  Field,
  RuleGroupType,
  ValueEditor,
  ValueEditorProps,
} from "react-querybuilder";
import { DatePicker } from "zaman";

const initialQuery: RuleGroupType = { combinator: "and", rules: [] };

function QueryBuilderForm() {
  const [query, setQuery] = useState(initialQuery);

  const CustomValueEditor = (props: ValueEditorProps) => {
    if (props.fieldData.datatype === "date") {
      return (
        <div>
          <DatePicker
            defaultValue={
              !props.value
                ? undefined
                : parse(props.value, "yyyy-MM-dd", new Date())
            }
            onChange={(d) =>
              props.handleOnChange(
                d.value ? format(d.value, "yyyy-MM-dd") : null
              )
            }
          />
        </div>
      );
    }

    return <ValueEditor {...props} />;
  };

  const fields: Field[] = [
    {
      name: "name",
      label: "Name",
      operators: [
        { name: "=", label: "is" },
        { name: "beginsWith", label: "begins with" },
      ],
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      operators: [{ name: "=", label: "is" }],
      datatype: "date",
    },
    {
      name: "dateRange",
      label: "Date Range",
      operators: [{ name: "between", label: "is between" }],
      datatype: "dateRange",
    },
  ];

  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={setQuery}
      controlElements={{ valueEditor: CustomValueEditor }}
    />
  );
}

export default QueryBuilderForm;
