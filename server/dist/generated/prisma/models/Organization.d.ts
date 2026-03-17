import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _avg: OrganizationAvgAggregateOutputType | null;
    _sum: OrganizationSumAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationAvgAggregateOutputType = {
    workingDays: number | null;
};
export type OrganizationSumAggregateOutputType = {
    workingDays: number[];
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    lateAfterTime: string | null;
    earlyCheckoutBeforeTime: string | null;
    analyticsIncludeFutureDays: boolean | null;
    attendanceEditPolicy: $Enums.AttendanceEditPolicy | null;
    planTier: $Enums.PlanTier | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    lateAfterTime: string | null;
    earlyCheckoutBeforeTime: string | null;
    analyticsIncludeFutureDays: boolean | null;
    attendanceEditPolicy: $Enums.AttendanceEditPolicy | null;
    planTier: $Enums.PlanTier | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    location: number;
    lateAfterTime: number;
    earlyCheckoutBeforeTime: number;
    roles: number;
    workingDays: number;
    analyticsIncludeFutureDays: number;
    attendanceEditPolicy: number;
    adminEmails: number;
    planTier: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationAvgAggregateInputType = {
    workingDays?: true;
};
export type OrganizationSumAggregateInputType = {
    workingDays?: true;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    lateAfterTime?: true;
    earlyCheckoutBeforeTime?: true;
    analyticsIncludeFutureDays?: true;
    attendanceEditPolicy?: true;
    planTier?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    lateAfterTime?: true;
    earlyCheckoutBeforeTime?: true;
    analyticsIncludeFutureDays?: true;
    attendanceEditPolicy?: true;
    planTier?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    lateAfterTime?: true;
    earlyCheckoutBeforeTime?: true;
    roles?: true;
    workingDays?: true;
    analyticsIncludeFutureDays?: true;
    attendanceEditPolicy?: true;
    adminEmails?: true;
    planTier?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _avg?: OrganizationAvgAggregateInputType;
    _sum?: OrganizationSumAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _avg?: OrganizationAvgAggregateInputType;
    _sum?: OrganizationSumAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    location: string;
    lateAfterTime: string;
    earlyCheckoutBeforeTime: string;
    roles: string[];
    workingDays: number[];
    analyticsIncludeFutureDays: boolean;
    attendanceEditPolicy: $Enums.AttendanceEditPolicy;
    adminEmails: string[];
    planTier: $Enums.PlanTier;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _avg: OrganizationAvgAggregateOutputType | null;
    _sum: OrganizationSumAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.StringFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    location?: Prisma.StringFilter<"Organization"> | string;
    lateAfterTime?: Prisma.StringFilter<"Organization"> | string;
    earlyCheckoutBeforeTime?: Prisma.StringFilter<"Organization"> | string;
    roles?: Prisma.StringNullableListFilter<"Organization">;
    workingDays?: Prisma.IntNullableListFilter<"Organization">;
    analyticsIncludeFutureDays?: Prisma.BoolFilter<"Organization"> | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFilter<"Organization"> | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.StringNullableListFilter<"Organization">;
    planTier?: Prisma.EnumPlanTierFilter<"Organization"> | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    staff?: Prisma.StaffMemberListRelationFilter;
    attendanceRecords?: Prisma.AttendanceRecordListRelationFilter;
    admins?: Prisma.AdminUserListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    lateAfterTime?: Prisma.SortOrder;
    earlyCheckoutBeforeTime?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    analyticsIncludeFutureDays?: Prisma.SortOrder;
    attendanceEditPolicy?: Prisma.SortOrder;
    adminEmails?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    staff?: Prisma.StaffMemberOrderByRelationAggregateInput;
    attendanceRecords?: Prisma.AttendanceRecordOrderByRelationAggregateInput;
    admins?: Prisma.AdminUserOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    location?: Prisma.StringFilter<"Organization"> | string;
    lateAfterTime?: Prisma.StringFilter<"Organization"> | string;
    earlyCheckoutBeforeTime?: Prisma.StringFilter<"Organization"> | string;
    roles?: Prisma.StringNullableListFilter<"Organization">;
    workingDays?: Prisma.IntNullableListFilter<"Organization">;
    analyticsIncludeFutureDays?: Prisma.BoolFilter<"Organization"> | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFilter<"Organization"> | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.StringNullableListFilter<"Organization">;
    planTier?: Prisma.EnumPlanTierFilter<"Organization"> | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    staff?: Prisma.StaffMemberListRelationFilter;
    attendanceRecords?: Prisma.AttendanceRecordListRelationFilter;
    admins?: Prisma.AdminUserListRelationFilter;
}, "id">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    lateAfterTime?: Prisma.SortOrder;
    earlyCheckoutBeforeTime?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    analyticsIncludeFutureDays?: Prisma.SortOrder;
    attendanceEditPolicy?: Prisma.SortOrder;
    adminEmails?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _avg?: Prisma.OrganizationAvgOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
    _sum?: Prisma.OrganizationSumOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    location?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    lateAfterTime?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    earlyCheckoutBeforeTime?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    roles?: Prisma.StringNullableListFilter<"Organization">;
    workingDays?: Prisma.IntNullableListFilter<"Organization">;
    analyticsIncludeFutureDays?: Prisma.BoolWithAggregatesFilter<"Organization"> | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyWithAggregatesFilter<"Organization"> | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.StringNullableListFilter<"Organization">;
    planTier?: Prisma.EnumPlanTierWithAggregatesFilter<"Organization"> | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberCreateNestedManyWithoutOrganizationInput;
    attendanceRecords?: Prisma.AttendanceRecordCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUpdateManyWithoutOrganizationNestedInput;
    attendanceRecords?: Prisma.AttendanceRecordUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    lateAfterTime?: Prisma.SortOrder;
    earlyCheckoutBeforeTime?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    workingDays?: Prisma.SortOrder;
    analyticsIncludeFutureDays?: Prisma.SortOrder;
    attendanceEditPolicy?: Prisma.SortOrder;
    adminEmails?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationAvgOrderByAggregateInput = {
    workingDays?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    lateAfterTime?: Prisma.SortOrder;
    earlyCheckoutBeforeTime?: Prisma.SortOrder;
    analyticsIncludeFutureDays?: Prisma.SortOrder;
    attendanceEditPolicy?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    lateAfterTime?: Prisma.SortOrder;
    earlyCheckoutBeforeTime?: Prisma.SortOrder;
    analyticsIncludeFutureDays?: Prisma.SortOrder;
    attendanceEditPolicy?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationSumOrderByAggregateInput = {
    workingDays?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type OrganizationCreaterolesInput = {
    set: string[];
};
export type OrganizationCreateworkingDaysInput = {
    set: number[];
};
export type OrganizationCreateadminEmailsInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type OrganizationUpdaterolesInput = {
    set?: string[];
    push?: string | string[];
};
export type OrganizationUpdateworkingDaysInput = {
    set?: number[];
    push?: number | number[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumAttendanceEditPolicyFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceEditPolicy;
};
export type OrganizationUpdateadminEmailsInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumPlanTierFieldUpdateOperationsInput = {
    set?: $Enums.PlanTier;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OrganizationCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutStaffInput, Prisma.OrganizationUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutStaffInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutStaffInput, Prisma.OrganizationUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.OrganizationUpsertWithoutStaffInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutStaffInput, Prisma.OrganizationUpdateWithoutStaffInput>, Prisma.OrganizationUncheckedUpdateWithoutStaffInput>;
};
export type OrganizationCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAttendanceRecordsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAttendanceRecordsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAttendanceRecordsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAttendanceRecordsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAttendanceRecordsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAttendanceRecordsInput, Prisma.OrganizationUpdateWithoutAttendanceRecordsInput>, Prisma.OrganizationUncheckedUpdateWithoutAttendanceRecordsInput>;
};
export type OrganizationCreateNestedOneWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAdminsInput, Prisma.OrganizationUncheckedCreateWithoutAdminsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAdminsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAdminsInput, Prisma.OrganizationUncheckedCreateWithoutAdminsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAdminsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAdminsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAdminsInput, Prisma.OrganizationUpdateWithoutAdminsInput>, Prisma.OrganizationUncheckedUpdateWithoutAdminsInput>;
};
export type OrganizationCreateWithoutStaffInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attendanceRecords?: Prisma.AttendanceRecordCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutStaffInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutStaffInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutStaffInput, Prisma.OrganizationUncheckedCreateWithoutStaffInput>;
};
export type OrganizationUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutStaffInput, Prisma.OrganizationUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutStaffInput, Prisma.OrganizationUncheckedCreateWithoutStaffInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutStaffInput, Prisma.OrganizationUncheckedUpdateWithoutStaffInput>;
};
export type OrganizationUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceRecords?: Prisma.AttendanceRecordUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAttendanceRecordsInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    admins?: Prisma.AdminUserUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAttendanceRecordsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAttendanceRecordsInput>;
};
export type OrganizationUpsertWithoutAttendanceRecordsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedUpdateWithoutAttendanceRecordsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAttendanceRecordsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAttendanceRecordsInput, Prisma.OrganizationUncheckedUpdateWithoutAttendanceRecordsInput>;
};
export type OrganizationUpdateWithoutAttendanceRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    admins?: Prisma.AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAdminsInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberCreateNestedManyWithoutOrganizationInput;
    attendanceRecords?: Prisma.AttendanceRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAdminsInput = {
    id?: string;
    name: string;
    location: string;
    lateAfterTime?: string;
    earlyCheckoutBeforeTime?: string;
    roles?: Prisma.OrganizationCreaterolesInput | string[];
    workingDays?: Prisma.OrganizationCreateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationCreateadminEmailsInput | string[];
    planTier?: $Enums.PlanTier;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.StaffMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAdminsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAdminsInput, Prisma.OrganizationUncheckedCreateWithoutAdminsInput>;
};
export type OrganizationUpsertWithoutAdminsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAdminsInput, Prisma.OrganizationUncheckedUpdateWithoutAdminsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAdminsInput, Prisma.OrganizationUncheckedCreateWithoutAdminsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAdminsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAdminsInput, Prisma.OrganizationUncheckedUpdateWithoutAdminsInput>;
};
export type OrganizationUpdateWithoutAdminsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUpdateManyWithoutOrganizationNestedInput;
    attendanceRecords?: Prisma.AttendanceRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAdminsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    lateAfterTime?: Prisma.StringFieldUpdateOperationsInput | string;
    earlyCheckoutBeforeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.OrganizationUpdaterolesInput | string[];
    workingDays?: Prisma.OrganizationUpdateworkingDaysInput | number[];
    analyticsIncludeFutureDays?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendanceEditPolicy?: Prisma.EnumAttendanceEditPolicyFieldUpdateOperationsInput | $Enums.AttendanceEditPolicy;
    adminEmails?: Prisma.OrganizationUpdateadminEmailsInput | string[];
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    attendanceRecords?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    staff: number;
    attendanceRecords: number;
    admins: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | OrganizationCountOutputTypeCountStaffArgs;
    attendanceRecords?: boolean | OrganizationCountOutputTypeCountAttendanceRecordsArgs;
    admins?: boolean | OrganizationCountOutputTypeCountAdminsArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffMemberWhereInput;
};
export type OrganizationCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
};
export type OrganizationCountOutputTypeCountAdminsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    location?: boolean;
    lateAfterTime?: boolean;
    earlyCheckoutBeforeTime?: boolean;
    roles?: boolean;
    workingDays?: boolean;
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: boolean;
    adminEmails?: boolean;
    planTier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    staff?: boolean | Prisma.Organization$staffArgs<ExtArgs>;
    attendanceRecords?: boolean | Prisma.Organization$attendanceRecordsArgs<ExtArgs>;
    admins?: boolean | Prisma.Organization$adminsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    location?: boolean;
    lateAfterTime?: boolean;
    earlyCheckoutBeforeTime?: boolean;
    roles?: boolean;
    workingDays?: boolean;
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: boolean;
    adminEmails?: boolean;
    planTier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    location?: boolean;
    lateAfterTime?: boolean;
    earlyCheckoutBeforeTime?: boolean;
    roles?: boolean;
    workingDays?: boolean;
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: boolean;
    adminEmails?: boolean;
    planTier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    location?: boolean;
    lateAfterTime?: boolean;
    earlyCheckoutBeforeTime?: boolean;
    roles?: boolean;
    workingDays?: boolean;
    analyticsIncludeFutureDays?: boolean;
    attendanceEditPolicy?: boolean;
    adminEmails?: boolean;
    planTier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "location" | "lateAfterTime" | "earlyCheckoutBeforeTime" | "roles" | "workingDays" | "analyticsIncludeFutureDays" | "attendanceEditPolicy" | "adminEmails" | "planTier" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | Prisma.Organization$staffArgs<ExtArgs>;
    attendanceRecords?: boolean | Prisma.Organization$attendanceRecordsArgs<ExtArgs>;
    admins?: boolean | Prisma.Organization$adminsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        staff: Prisma.$StaffMemberPayload<ExtArgs>[];
        attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[];
        admins: Prisma.$AdminUserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: $Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: $Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    staff<T extends Prisma.Organization$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendanceRecords<T extends Prisma.Organization$attendanceRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    admins<T extends Prisma.Organization$adminsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly location: Prisma.FieldRef<"Organization", 'String'>;
    readonly lateAfterTime: Prisma.FieldRef<"Organization", 'String'>;
    readonly earlyCheckoutBeforeTime: Prisma.FieldRef<"Organization", 'String'>;
    readonly roles: Prisma.FieldRef<"Organization", 'String[]'>;
    readonly workingDays: Prisma.FieldRef<"Organization", 'Int[]'>;
    readonly analyticsIncludeFutureDays: Prisma.FieldRef<"Organization", 'Boolean'>;
    readonly attendanceEditPolicy: Prisma.FieldRef<"Organization", 'AttendanceEditPolicy'>;
    readonly adminEmails: Prisma.FieldRef<"Organization", 'String[]'>;
    readonly planTier: Prisma.FieldRef<"Organization", 'PlanTier'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffMemberScalarFieldEnum | Prisma.StaffMemberScalarFieldEnum[];
};
export type Organization$attendanceRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type Organization$adminsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};
export {};
