import * as changeCase from "change-case";

export function toHtml(data: Record<string, any>): string {
  return `<table>${Object.entries(data).reduce((mail, [title, value]) => {
    const key = changeCase.capitalCase(title);

    const th = `<td><strong>${key}:</strong></td>`;
    const td = `<td>${value}</td>`;

    return mail + `<tr>${th}${td}</tr>`;
  }, "")}</table>`;
}
