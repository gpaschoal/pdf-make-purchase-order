import PdfMake from 'pdfmake'
import fs from 'fs'
import { PurchaseOrderCommand } from './purchase-order-command'
import { UseCaseInterface } from '../use-case-interface'
import { CommandInterface } from '../command-interface'

var fonts = {
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique'
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  }
};

class PurchaseOrderUseCase implements UseCaseInterface<PurchaseOrderCommand, void> {
  async handle(command: CommandInterface): Promise<void> {
    const docDefinition = {
      content: [
        {
          text: 'this is the text'
        }
      ],
      defaultStyle: {
        font: 'Helvetica'
      }
    };

    const printer = new PdfMake(fonts)

    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('pdfs/tables.pdf'));
    pdfDoc.end();
  }
}

export { PurchaseOrderUseCase }