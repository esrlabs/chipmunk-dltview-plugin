import * as Toolkit from 'chipmunk.client.toolkit';

export const CDelimiters = {
    columns: '\u0004',
    arguments: '\u0005',
};

export const CColumnsHeaders = [
    'Datetime',
    'ECUID',
    'VERS',
    'SID',
    'MCNT',
    'TMS',
    'EID',
    'APID',
    'CTID',
    'MSTP',
    'PAYLOAD',
];

export const CAliases = {
    'Datetime': 'DateTime',
    'ECUID': 'ECU',
    'VERS': 'Dlt Protocol Version (VERS)',
    'SID': 'Session ID (SEID)',
    'MCNT': 'Message counter (MCNT)',
    'TMS': 'Timestamp (TMSP)',
    'EID': 'ECU',
    'APID': 'Application ID (APID)',
    'CTID': 'Context ID (CTID)',
    'MSTP': 'Message Type (MSTP)',
    'PAYLOAD': 'Payload'
};

export class DLTRowColumnsAPI extends Toolkit.ATypedRowRenderAPIColumns {

    constructor() {
        super();
    }

    public getHeaders(): string[] {
        return CColumnsHeaders;
    }

    public getDelimiter(): string {
        return '\u0004';
    }

    public getDefaultWidths(): Array<{ width: number, min: number }> {
        return [
            { width: 150, min: 30 },
            { width: 50, min: 30 },
            { width: 20, min: 20 },
            { width: 50, min: 30 },
            { width: 40, min: 30 },
            { width: 70, min: 30 },
            { width: 50, min: 30 },
            { width: 50, min: 30 },
            { width: 50, min: 30 },
            { width: 50, min: 30 },
            { width: 1000, min: 100 },
        ];
    }

}
