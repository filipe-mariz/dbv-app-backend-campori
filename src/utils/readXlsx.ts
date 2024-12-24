import * as xlsx from 'xlsx';

const readXlsx = (file: any) => {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    return xlsx.utils.sheet_to_json(worksheet);
}

export default readXlsx;
