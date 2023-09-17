from rest_framework import serializers
from pastes.models import Paste


class PasteSerializer(serializers.ModelSerializer):
#    id = serializers.IntegerField(read_only=True)
#    user = serializers.CharField(max_length=20, required=True)
#    utime = serializers.DateTimeField()
#    content = serializers.CharField(required=True)
#
#    def create(self, validated_data):
#        return Paste.objects.create(**validated_data)
#
#    def update(self, instance, validated_data):
#        instance.user = validated_data.get('user', instance.user)
#        instance.utime = validated_data.get('utime', instance.utime)
#        instance.content = validated_data.get('content', instance.content)
#        instance.save()
#        return instance
    class Meta:
        model = Paste
        fields = ['id', 'user', 'utime', 'content']
